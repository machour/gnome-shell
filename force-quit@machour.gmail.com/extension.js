const St = imports.gi.St;
const Main = imports.ui.main;
const Util = imports.misc.util;

let button;

function _callXkill() {
    try {
        Util.spawnCommandLine('xkill');
    } catch (err) {
        global.log('foo');
    }
}

function init() {
    button = new St.Bin({ style_class: 'panel-button',
                          reactive: true,
                          can_focus: false,
                          x_fill: true,
                          y_fill: true,
                          track_hover: true });
    let icon = new St.Icon({ icon_name: 'window-close',
                             icon_type: St.IconType.SYMBOLIC,
                             icon_size: 24,
                             style_class: 'system-status-icon' });

    button.set_child(icon);
    button.set_tooltip_text('Click me (until the mouse pointer turns into a cross) and select an application to kill');
    button.connect('button-press-event', _callXkill);
}

function enable() {
    Main.panel._rightBox.insert_actor(button, 0);
}

function disable() {
    Main.panel._rightBox.remove_actor(button);
}
