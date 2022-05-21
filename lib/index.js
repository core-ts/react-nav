"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
require("../navigation.css");
function Nav(p) {
  return (React.createElement('nav', { className: p.className }, React.createElement('ul', null, React.createElement('li', null, React.createElement('p', { className: 'sidebar-off-menu' }, React.createElement('button', { className: 'toggle', onClick: p.toggle }), React.createElement('i', { className: 'expand', onClick: p.expand }), React.createElement('i', { className: 'collapse', onClick: p.collapse }))), exports.renderItems(p.path, p.pins, p.pin, p.resource, p.iconClass, true, true), exports.renderItems(p.path, p.items, p.pin, p.resource, p.iconClass, true))));
}
exports.Nav = Nav;
exports.renderItems = function (activePath, features, pin, resource, iconClass, pinable, isPinned) {
  return features.map(function (feature, index) {
    return exports.renderItem(activePath, index, feature, pin, resource, iconClass, pinable, isPinned);
  });
};
exports.renderItem = function (activePath, key, module, pin, resource, iconClass, pinable, isPinned) {
  var name = module.name;
  if (resource && module.resource) {
    name = !resource[module.resource] || resource[module.resource] === '' ? module.name : resource[module.resource];
  }
  var className = getIconClass(module.icon);
  if (module.children && Array.isArray(module.children)) {
    var link = module.path;
    var features = module.children;
    return (React.createElement('li', { key: key, className: 'open ' + exports.activeWithPath(activePath, link, true, features) }, React.createElement('div', { className: 'menu-item', onClick: function (e) { return exports.toggleMenuItem(e); } }, pinable && React.createElement('button', { type: 'button', className: 'btn-pin ' + (isPinned ? 'pinned' : ''), onClick: function (event) { return pin(event, key, module); } }), React.createElement('i', { className: iconClass }, className), React.createElement('span', null, name), React.createElement('i', { className: 'entity-icon down' })), React.createElement('ul', { className: 'sub-list expanded' }, exports.renderItems(activePath, features, pin, resource, iconClass, false))));
  }
  else {
    var x = { to: module.path, className: 'menu-item' };
    return (React.createElement('li', { key: key, className: exports.activeWithPath(activePath, module.path, false) }, React.createElement(react_router_dom_1.Link, x, pinable && React.createElement('button', { type: 'button', className: 'btn-pin ' + (isPinned ? 'pinned' : ''), onClick: function (event) { return pin(event, key, module); } }), React.createElement('i', { className: iconClass }, className), React.createElement('span', null, name))));
  }
};
function findParent(ele, node) {
  var current = ele;
  while (true) {
    current = current.parentElement;
    if (!current) {
      return null;
    }
    if (current.nodeName === node) {
      return current;
    }
  }
}
exports.findParent = findParent;
function getIconClass(icon) {
  return !icon || icon === '' ? 'settings' : icon;
}
exports.getIconClass = getIconClass;
exports.collapseAll = function (e) {
  e.preventDefault();
  var parent = findParent(e.currentTarget, 'NAV');
  if (parent) {
    parent.classList.add('collapsed-all');
    parent.classList.remove('expanded-all');
    var navbar = Array.from(parent.querySelectorAll('.sidebar>nav>ul>li>ul.expanded'));
    if (navbar.length > 0) {
      var icons = Array.from(parent.querySelectorAll('i.down'));
      var i = 0;
      for (i = 0; i < navbar.length; i++) {
        navbar[i].className = 'sub-list';
      }
      for (i = 0; i < icons.length; i++) {
        icons[i].className = 'entity-icon up';
      }
    }
  }
};
exports.expandAll = function (e) {
  e.preventDefault();
  var parent = findParent(e.currentTarget, 'NAV');
  if (parent) {
    parent.classList.remove('collapsed-all');
    parent.classList.add('expanded-all');
    var navbar = Array.from(parent.querySelectorAll('.sidebar>nav>ul>li>ul.sub-list'));
    if (navbar.length > 0) {
      var icons = Array.from(parent.querySelectorAll('i.up'));
      var i = 0;
      for (i = 0; i < navbar.length; i++) {
        navbar[i].className = 'sub-list expanded';
      }
      for (i = 0; i < icons.length; i++) {
        icons[i].className = 'entity-icon down';
      }
    }
  }
};
function isCollapsedAll(parent) {
  var navbar = Array.from(parent.querySelectorAll('.sidebar>nav>ul>li>ul.sub-list'));
  if (navbar.length > 0) {
    var i = 0;
    for (i = 0; i < navbar.length; i++) {
      if (navbar[i].classList.contains('expanded')) {
        return false;
      }
    }
    return true;
  }
  return false;
}
exports.isCollapsedAll = isCollapsedAll;
function isExpandedAll(parent) {
  var navbar = Array.from(parent.querySelectorAll('.sidebar>nav>ul>li>ul.sub-list'));
  if (navbar.length > 0) {
    var i = 0;
    for (i = 0; i < navbar.length; i++) {
      if (!navbar[i].classList.contains('expanded')) {
        return false;
      }
    }
    return true;
  }
  return false;
}
exports.isExpandedAll = isExpandedAll;
exports.activeWithPath = function (activePath, path, isParent, features) {
  if (isParent && features && Array.isArray(features)) {
    var hasChildLink = features.some(function (item) { return item.path && item.path.length > 0 && activePath.startsWith(item.path); });
    return path && activePath.startsWith(path) && hasChildLink ? 'active' : '';
  }
  return path && activePath.startsWith(path) ? 'active' : '';
};
exports.toggleMenuItem = function (event) {
  event.preventDefault();
  var target = event.currentTarget;
  var currentTarget = event.currentTarget;
  var nul = currentTarget.nextElementSibling;
  if (nul) {
    var elI = currentTarget.querySelectorAll('.menu-item > i.entity-icon');
    if (nul.classList.contains('expanded')) {
      nul.classList.remove('expanded');
      if (elI && elI.length > 0) {
        elI[0].classList.add('up');
        elI[0].classList.remove('down');
      }
    }
    else {
      nul.classList.add('expanded');
      if (elI && elI.length > 0) {
        elI[0].classList.remove('up');
        elI[0].classList.add('down');
      }
    }
  }
  if (target.nodeName === 'A') {
    target = target.parentElement;
  }
  if (target && target.nodeName === 'LI') {
    target.classList.toggle('open');
  }
  var parent = findParent(currentTarget, 'NAV');
  if (parent) {
    setTimeout(function () {
      if (isExpandedAll(parent)) {
        parent.classList.remove('collapsed-all');
        parent.classList.add('expanded-all');
      }
      else if (isCollapsedAll(parent)) {
        parent.classList.remove('expanded-all');
        parent.classList.add('collapsed-all');
      }
      else {
        parent.classList.remove('expanded-all');
        parent.classList.remove('collapsed-all');
      }
    }, 0);
  }
};
function sub(n1, n2) {
  if (!n1 && !n2) {
    return 0;
  }
  else if (n1 && n2) {
    return n1 - n2;
  }
  else if (n1) {
    return n1;
  }
  else if (n2) {
    return -n2;
  }
  return 0;
}
exports.sub = sub;
