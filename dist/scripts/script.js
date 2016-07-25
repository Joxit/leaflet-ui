/*!
 * tile-server-ui
 * Copyright (C) 2016  Jones Magloire @Joxit
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
var leafletUI={};leafletUI.map=L.map("map",{zoomControl:!1}).setView([48.8552168,2.3482104],13),leafletUI.tileServer={},leafletUI.tileServer.getServers=function(e){try{var t=JSON.parse(localStorage.getItem("tileServer"));if(t instanceof Array)return e?t[e]:t}catch(o){}return e?"":[]},leafletUI.tileServer.servers=leafletUI.tileServer.getServers(),leafletUI.tileServer.url=function(){return leafletUI.tileServer.servers&&leafletUI.tileServer.servers.length>0?leafletUI.tileServer.servers[0]||"":""},leafletUI.tileServer.overlayUrl=function(){return JSON.parse(localStorage.getItem("tileServerOverlay"))||""},leafletUI.tileServer.opts={attribution:'&copy; <a href="https://github.com/Joxit">Joxit</a> and your tile server',maxZoom:22},leafletUI.tileServer.layer=L.tileLayer(leafletUI.tileServer.url(),leafletUI.tileServer.opts),leafletUI.tileServer.overlay=L.tileLayer(leafletUI.tileServer.overlayUrl(),leafletUI.tileServer.opts),leafletUI.tileServer.layer.addTo(leafletUI.map),leafletUI.tileServer.overlay.addTo(leafletUI.map);var addTileServer=function(e){var t=leafletUI.tileServer.getServers();(!t||!t instanceof Array)&&(t=[]),e=e.trim(),t.indexOf(e)==-1&&(t.push(e),leafletUI.tileServer.servers=t,localStorage.setItem("tileServer",JSON.stringify(t)))},removeTileServer=function(e){var t=leafletUI.tileServer.getServers();(!t||!t instanceof Array)&&(t=[]),e=e.trim();var o=t.indexOf(e);o!=-1&&(t.splice(o,1),leafletUI.tileServer.servers=t,localStorage.setItem("tileServer",JSON.stringify(t)))},changeTileServer=function(e){var t=leafletUI.tileServer.getServers();(!t||!t instanceof Array)&&(t=[]),e=e.trim();var o=t.indexOf(e);o!=-1&&(t.splice(o,1),t=[e].concat(t),leafletUI.tileServer.servers=t,localStorage.setItem("tileServer",JSON.stringify(t)))};riot.mount("change"),riot.mount("remove"),riot.mount("add"),riot.compile(function(){}),leafletUI.control=leafletUI.control||{},leafletUI.control.add=L.Control.extend({options:{position:"bottomright"},onAdd:function(e){var t=L.DomUtil.create("button","mdl-button mdl-js-button mdl-button--fab mdl-button--colored");return L.DomUtil.create("i","material-icons",t).textContent="add",t.id="add-tile-server-button",t.addEventListener("click",function(){leafletUI.addTag.dialog.showModal()}),t}}),leafletUI.map.addControl(new leafletUI.control.add),leafletUI.control=leafletUI.control||{},leafletUI.control.menu=L.Control.extend({options:{position:"topright"},onAdd:function(e){var t=L.DomUtil.create("div","menu-control"),o=L.DomUtil.create("button","mdl-button mdl-js-button mdl-button--icon",t);o.id="menu-control-button",L.DomUtil.create("i","material-icons",o).innerHTML="more_vert",L.DomEvent.disableClickPropagation(o);var l=L.DomUtil.create("ul","mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect",t);l.setAttribute("for","menu-control-button");var r=function(e,t,o){var r=L.DomUtil.create("li","mdl-menu__item",l);r.id=e,r.innerHTML=t,r.onclick=o};return r("change-tile-server-button","Change url",function(){leafletUI.changeTag.show()}),r("remove-tile-server-button","Remove url",function(){leafletUI.removeTag.show()}),t}}),leafletUI.map.addControl(new leafletUI.control.menu),leafletUI.control=leafletUI.control||{},leafletUI.control.zoom=L.Control.extend({options:{position:"topleft",zoomIn:{text:"+",title:"Zoom in"},zoomOut:{text:"-",title:"Zoom out"},zoom:{text:leafletUI.map._zoom,title:"Current zoom"}},onAdd:function(e){var t=L.DomUtil.create("div","zoom-control"),o=this,l=function(e,l){var r=L.DomUtil.create("button","mdl-button mdl-js-button mdl-button--raised mdl-button--colored zoom-control-button",t);return r.innerHTML=e.text,r.title=e.title,l&&L.DomEvent.on(r,"click",l,o),L.DomEvent.disableClickPropagation(r),r};return this._zoomInButton=l(this.options.zoomIn,function(e){leafletUI.map.zoomIn(e.shiftKey?3:1)}),this._zoomOutButton=l(this.options.zoomOut,function(e){leafletUI.map.zoomOut(e.shiftKey?3:1)}),this._zoomButton=l(this.options.zoom),this._onZoomUpdate(),leafletUI.map.on("zoomend zoomlevelschange",this._onZoomUpdate,this),t},_onZoomUpdate:function(){this._zoomInButton.removeAttribute("disabled"),this._zoomOutButton.removeAttribute("disabled"),leafletUI.map._zoom===leafletUI.map.getMinZoom()&&this._zoomOutButton.setAttribute("disabled",""),leafletUI.map._zoom===leafletUI.map.getMaxZoom()&&this._zoomInButton.setAttribute("disabled",""),this._zoomButton.innerHTML=leafletUI.map._zoom}}),leafletUI.map.addControl(new leafletUI.control.zoom);