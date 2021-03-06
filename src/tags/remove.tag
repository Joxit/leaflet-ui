<!--
 Copyright (C) 2016-2017  Jones Magloire @Joxit

 This program is free software: you can redistribute it and/or modify
 it under the terms of the GNU Affero General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Affero General Public License for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this program.  If not, see <http://www.gnu.org/licenses/>.
-->
<remove>
  <material-popup name="remove-tile-server-dialog">
    <div class="material-popup-title">Remove your Tile Server ?</div>
    <div class="material-popup-content">
      <ul>
        <li each="{ url in leafletUI.tileServer.servers }">
          <span>
            <a href="#" class="selectable" onClick="leafletUI.removeTag.removeUrl('{ btoa(url) }');">
              <i class="material-icons">delete</i>
            </a>
            <span class="url">{url}</span>
          </span>
        </li>
      </ul>
    </div>
    <div class="material-popup-action">
      <material-button class="dialog-button" waves-color="rgba(158,158,158,.4)" onClick="leafletUI.removeTag.overlay();">Unset overlay</material-button>
      <material-button class="dialog-button" waves-color="rgba(158,158,158,.4)" onClick="leafletUI.removeTag.close();">Close</material-button>
    </div>
  </material-popup>
  <script type="text/javascript">
    leafletUI.removeTag = leafletUI.removeTag || {}
    leafletUI.removeTag.update = this.update;
    leafletUI.removeTag.removeUrl = function (url) {
      url = atob(url);
      removeTileServer(url);
      leafletUI.snackbar(url + ' has been removed.', false);
      leafletUI.removeTag.update();
    };

    leafletUI.removeTag.close = function () {
      leafletUI.removeTag.dialog.close();
      leafletUI.removeTag.update();
    };

    leafletUI.removeTag.show = function () {
      leafletUI.removeTag.update();
      leafletUI.removeTag.dialog.open();
    };

    leafletUI.removeTag.overlay = function () {
      localStorage.setItem('tileServerOverlay', '');
      leafletUI.tileServer.overlay.setUrlHistory('');
    };

    this.on('updated', function () {
      leafletUI.removeTag.dialog = this.tags['remove-tile-server-dialog'];
    });
  </script>
</remove>