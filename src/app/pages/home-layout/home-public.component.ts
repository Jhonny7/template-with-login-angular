import { Location, PopStateEvent } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import * as $ from "jquery";
import PerfectScrollbar from 'perfect-scrollbar';
import { Subscription } from 'rxjs';
import 'rxjs/add/operator/filter';
import { Menu } from 'src/app/models/Menu';
import { Event } from 'src/app/services/event.service';
import { HttpServiceGeneric } from 'src/app/services/http.generic.service';
import { NavParamsService } from 'src/app/services/nav-params.service';
import { AlertService } from '../../services/alert.service';
import { LoadingService } from '../../services/loading-service';
import { LocalStorageEncryptService } from '../../services/local-storage-encrypt-service';

@Component({
  selector: 'app-home-public',
  templateUrl: './home-public.component.html',
  styleUrls: ['./home-public.component.scss']
})
export class HomePublicComponent implements OnInit {
  public staticMenu: Menu[] = [];
  public mostrarSide:boolean = false;
  /** Generate HomeLayoutComponent */
  constructor(
    private navParams: NavParamsService,
    private loadingService: LoadingService,
    private alertService: AlertService,
    private localStorageEncryptService: LocalStorageEncryptService,
    private httpService: HttpServiceGeneric,
    private events: Event,
    public location: Location, private router: Router
  ) {
    /* this.staticMenu.push(
      new Menu("Catálogos", false, "assignment_turned_in", null,
        [
        new Menu("Subasta", false, "credit_card", "/main/subasta", []),
        new Menu("Campaña", false, "calendar_view_day", "/main/campania", []),
        new Menu("Compra de boletos", false, "loyalty", "/main/boleto", []),
        new Menu("Base", false, "loyalty", "/main/base", []),
        new Menu("Contenido", false, "loyalty", "/main/contenido", []),
        ]
      )); */
  }

  show(){
    this.mostrarSide = !this.mostrarSide;
  }

  private _router: Subscription;
  private lastPoppedUrl: string;
  private yScrollStack: number[] = [];

  ngOnInit() {
      const isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;

      if (isWindows && !document.getElementsByTagName('body')[0].classList.contains('sidebar-mini')) {
          // if we are on windows OS we activate the perfectScrollbar function

          document.getElementsByTagName('body')[0].classList.add('perfect-scrollbar-on');
      } else {
          document.getElementsByTagName('body')[0].classList.remove('perfect-scrollbar-off');
      }
      const elemMainPanel = <HTMLElement>document.querySelector('.main-panel');
      const elemSidebar = <HTMLElement>document.querySelector('.sidebar .sidebar-wrapper');

      this.location.subscribe((ev:PopStateEvent) => {
          this.lastPoppedUrl = ev.url;
      });
       this.router.events.subscribe((event:any) => {
          if (event instanceof NavigationStart) {
             if (event.url != this.lastPoppedUrl)
                 this.yScrollStack.push(window.scrollY);
         } else if (event instanceof NavigationEnd) {
             if (event.url == this.lastPoppedUrl) {
                 this.lastPoppedUrl = undefined;
                 window.scrollTo(0, this.yScrollStack.pop());
             } else
                 window.scrollTo(0, 0);
         }
      });
      this._router = this.router.events.filter(event => event instanceof NavigationEnd).subscribe((event: NavigationEnd) => {
           elemMainPanel.scrollTop = 0;
           elemSidebar.scrollTop = 0;
      });
      if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
          let ps = new PerfectScrollbar(elemMainPanel);
          ps = new PerfectScrollbar(elemSidebar);
      }

      const window_width = $(window).width();
      let $sidebar = $('.sidebar');
      let $sidebar_responsive = $('body > .navbar-collapse');
      let $sidebar_img_container = $sidebar.find('.sidebar-background');


      if(window_width > 767){
          if($('.fixed-plugin .dropdown').hasClass('show-dropdown')){
              $('.fixed-plugin .dropdown').addClass('open');
          }

      }

      $('.fixed-plugin a').click(function(event){
        // Alex if we click on switch, stop propagation of the event, so the dropdown will not be hide, otherwise we set the  section active
          if($(this).hasClass('switch-trigger')){
              if(event.stopPropagation){
                  event.stopPropagation();
              }
              else if(window.event){
                 window.event.cancelBubble = true;
              }
          }
      });

      $('.fixed-plugin .badge').click(function(){
          let $full_page_background = $('.full-page-background');


          $(this).siblings().removeClass('active');
          $(this).addClass('active');

          var new_color = $(this).data('color');

          if($sidebar.length !== 0){
              $sidebar.attr('data-color', new_color);
          }

          if($sidebar_responsive.length != 0){
              $sidebar_responsive.attr('data-color',new_color);
          }
      });

      $('.fixed-plugin .img-holder').click(function(){
          let $full_page_background = $('.full-page-background');

          $(this).parent('li').siblings().removeClass('active');
          $(this).parent('li').addClass('active');


          var new_image = $(this).find("img").attr('src');

          if($sidebar_img_container.length !=0 ){
              $sidebar_img_container.fadeOut('fast', function(){
                 $sidebar_img_container.css('background-image','url("' + new_image + '")');
                 $sidebar_img_container.fadeIn('fast');
              });
          }

          if($full_page_background.length != 0){

              $full_page_background.fadeOut('fast', function(){
                 $full_page_background.css('background-image','url("' + new_image + '")');
                 $full_page_background.fadeIn('fast');
              });
          }

          if($sidebar_responsive.length != 0){
              $sidebar_responsive.css('background-image','url("' + new_image + '")');
          }
      });
  }
  ngAfterViewInit() {
      this.runOnRouteChange();
  }
  isMaps(path){
      var titlee = this.location.prepareExternalUrl(this.location.path());
      titlee = titlee.slice( 1 );
      if(path == titlee){
          return false;
      }
      else {
          return true;
      }
  }
  runOnRouteChange(): void {
    if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
      const elemMainPanel = <HTMLElement>document.querySelector('.main-panel');
      const ps = new PerfectScrollbar(elemMainPanel);
      ps.update();
    }
  }
  isMac(): boolean {
      let bool = false;
      if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
          bool = true;
      }
      return bool;
  }

}
