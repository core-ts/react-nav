import * as React from 'react';
import { Link } from 'react-router-dom';
export function Nav(p) {
  return (React.createElement("nav", { className: p.className },
    React.createElement("ul", null,
      React.createElement("li", null,
        React.createElement("button", { className: 'toggle-menu', onClick: p.toggle }),
        React.createElement("p", { className: 'sidebar-off-menu' },
          React.createElement("button", { className: 'toggle', onClick: p.toggle }),
          React.createElement("i", { className: 'expand', onClick: p.expand }),
          React.createElement("i", { className: 'collapse', onClick: p.collapse }))),
      renderItems(p.path, p.pins, p.pin, p.resource, p.iconClass, true, true),
      renderItems(p.path, p.items, p.pin, p.resource, p.iconClass, true))));
}
export var renderItems = function (activePath, features, pin, resource, iconClass, pinable, isPinned) {
  return features.map(function (feature, index) {
    return renderItem(activePath, index, feature, pin, resource, iconClass, pinable, isPinned);
  });
};
export var renderItem = function (activePath, key, module, pin, resource, iconClass, pinable, isPinned) {
  var name = module.name;
  if (resource && module.resource) {
    name = !resource[module.resource] || resource[module.resource] === '' ? module.name : resource[module.resource];
  }
  var className = getIconClass(module.icon);
  if (module.children && Array.isArray(module.children)) {
    var link = module.path;
    var features = module.children;
    return (React.createElement("li", { key: key, className: 'open ' + activeWithPath(activePath, link, true, features) },
      React.createElement("div", { className: 'menu-item', onClick: function (e) { return toggleMenuItem(e); } },
        pinable && React.createElement("button", { type: 'button', className: "btn-pin " + (isPinned ? 'pinned' : ''), onClick: function (event) { return pin(event, key, module); } }),
        React.createElement("i", { className: iconClass }, className),
        React.createElement("span", null, name),
        React.createElement("i", { className: 'entity-icon down' })),
      React.createElement("ul", { className: 'list-child expanded' }, renderItems(activePath, features, pin, resource, iconClass, false))));
  }
  else {
    return (React.createElement("li", { key: key, className: activeWithPath(activePath, module.path, false) },
      React.createElement(Link, { to: module.path, className: 'menu-item' },
        pinable && React.createElement("button", { type: 'button', className: "btn-pin " + (isPinned ? 'pinned' : ''), onClick: function (event) { return pin(event, key, module); } }),
        React.createElement("i", { className: iconClass }, className),
        React.createElement("span", null, name))));
  }
};
export function findParent(ele, node) {
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
export function getIconClass(icon) {
  return !icon || icon === '' ? 'settings' : icon;
}
export var onMouseHover = function (e, sysBody) {
  e.preventDefault();
  if (sysBody.classList.contains('top-menu') && window.innerWidth > 768) {
    var navbar = Array.from(document.querySelectorAll('.sidebar>nav>ul>li>ul.expanded'));
    var icons = Array.from(document.querySelectorAll('.sidebar>nav>ul>li>a>i.up'));
    if (navbar.length > 0) {
      for (var i = 0; i < navbar.length; i++) {
        navbar[i].classList.toggle('expanded');
        if (icons[i]) {
          icons[i].className = 'entity-icon down';
        }
      }
    }
  }
};
export var collapseAll = function (e) {
  e.preventDefault();
  var parent = findParent(e.currentTarget, 'NAV');
  if (parent) {
    parent.classList.add('collapsed-all');
    parent.classList.remove('expanded-all');
    var navbar = Array.from(parent.querySelectorAll('.sidebar>nav>ul>li>ul.expanded'));
    if (navbar.length > 0) {
      var icons = Array.from(parent.querySelectorAll('.sidebar>nav>ul>li>a>i.up'));
      var i = 0;
      for (i = 0; i < navbar.length; i++) {
        navbar[i].className = 'list-child';
        if (icons[i]) {
          icons[i].className = 'entity-icon down';
        }
      }
    }
  }
};
export var expandAll = function (e) {
  e.preventDefault();
  var parent = findParent(e.currentTarget, 'NAV');
  if (parent) {
    parent.classList.remove('collapsed-all');
    parent.classList.add('expanded-all');
    var navbar = Array.from(parent.querySelectorAll('.sidebar>nav>ul>li>ul.list-child'));
    if (navbar.length > 0) {
      var icons = Array.from(parent.querySelectorAll('.sidebar>nav>ul>li>a>i.down'));
      var i = 0;
      for (i = 0; i < navbar.length; i++) {
        navbar[i].className = 'list-child expanded';
        if (icons[i]) {
          icons[i].className = 'entity-icon up';
        }
      }
    }
  }
};
export function isCollapsedAll(parent) {
  var navbar = Array.from(parent.querySelectorAll('.sidebar>nav>ul>li>ul.list-child'));
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
export function isExpandedAll(parent) {
  var navbar = Array.from(parent.querySelectorAll('.sidebar>nav>ul>li>ul.list-child'));
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
export var activeWithPath = function (activePath, path, isParent, features) {
  if (isParent && features && Array.isArray(features)) {
    var hasChildLink = features.some(function (item) { return item.path && item.path.length > 0 && activePath.startsWith(item.path); });
    return path && activePath.startsWith(path) && hasChildLink ? 'active' : '';
  }
  return path && activePath.startsWith(path) ? 'active' : '';
};
export var toggleMenuItem = function (event) {
  event.preventDefault();
  var target = event.currentTarget;
  var currentTarget = event.currentTarget;
  var elI = currentTarget.querySelectorAll('.menu-item > i')[1];
  if (elI) {
    if (elI.classList.contains('down')) {
      elI.classList.remove('down');
      elI.classList.add('up');
    }
    else {
      if (elI.classList.contains('up')) {
        elI.classList.remove('up');
        elI.classList.add('down');
      }
    }
  }
  if (currentTarget.nextElementSibling) {
    currentTarget.nextElementSibling.classList.toggle('expanded');
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
