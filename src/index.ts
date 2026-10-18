import * as React from "react"
import { Link } from "react-router"

import "../navigation.css"

export function PinIcon(props: React.SVGProps<SVGAElement>) {
  return React.createElement(
    "svg",
    { width: "18px", height: "18px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    React.createElement("path", {
      d: "M12.0004 15L12.0004 22M8.00043 7.30813V9.43875C8.00043 9.64677 8.00043 9.75078 7.98001 9.85026C7.9619 9.93852 7.93194 10.0239 7.89095 10.1042C7.84474 10.1946 7.77977 10.2758 7.64982 10.4383L6.08004 12.4005C5.4143 13.2327 5.08143 13.6487 5.08106 13.9989C5.08073 14.3035 5.21919 14.5916 5.4572 14.7815C5.73088 15 6.26373 15 7.32943 15H16.6714C17.7371 15 18.27 15 18.5437 14.7815C18.7817 14.5916 18.9201 14.3035 18.9198 13.9989C18.9194 13.6487 18.5866 13.2327 17.9208 12.4005L16.351 10.4383C16.2211 10.2758 16.1561 10.1946 16.1099 10.1042C16.0689 10.0239 16.039 9.93852 16.0208 9.85026C16.0004 9.75078 16.0004 9.64677 16.0004 9.43875V7.30813C16.0004 7.19301 16.0004 7.13544 16.0069 7.07868C16.0127 7.02825 16.0223 6.97833 16.0357 6.92937C16.0507 6.87424 16.0721 6.8208 16.1149 6.71391L17.1227 4.19423C17.4168 3.45914 17.5638 3.09159 17.5025 2.79655C17.4489 2.53853 17.2956 2.31211 17.0759 2.1665C16.8247 2 16.4289 2 15.6372 2H8.36368C7.57197 2 7.17611 2 6.92494 2.1665C6.70529 2.31211 6.55199 2.53853 6.49838 2.79655C6.43707 3.09159 6.58408 3.45914 6.87812 4.19423L7.88599 6.71391C7.92875 6.8208 7.95013 6.87424 7.96517 6.92937C7.97853 6.97833 7.98814 7.02825 7.99392 7.07868C8.00043 7.13544 8.00043 7.19301 8.00043 7.30813Z",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    }),
  )
}
/*
const PinIcon2 = (props: React.SVGProps<SVGAElement>) => (
  <svg width="18px" height="18px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12.0004 15L12.0004 22M8.00043 7.30813V9.43875C8.00043 9.64677 8.00043 9.75078 7.98001 9.85026C7.9619 9.93852 7.93194 10.0239 7.89095 10.1042C7.84474 10.1946 7.77977 10.2758 7.64982 10.4383L6.08004 12.4005C5.4143 13.2327 5.08143 13.6487 5.08106 13.9989C5.08073 14.3035 5.21919 14.5916 5.4572 14.7815C5.73088 15 6.26373 15 7.32943 15H16.6714C17.7371 15 18.27 15 18.5437 14.7815C18.7817 14.5916 18.9201 14.3035 18.9198 13.9989C18.9194 13.6487 18.5866 13.2327 17.9208 12.4005L16.351 10.4383C16.2211 10.2758 16.1561 10.1946 16.1099 10.1042C16.0689 10.0239 16.039 9.93852 16.0208 9.85026C16.0004 9.75078 16.0004 9.64677 16.0004 9.43875V7.30813C16.0004 7.19301 16.0004 7.13544 16.0069 7.07868C16.0127 7.02825 16.0223 6.97833 16.0357 6.92937C16.0507 6.87424 16.0721 6.8208 16.1149 6.71391L17.1227 4.19423C17.4168 3.45914 17.5638 3.09159 17.5025 2.79655C17.4489 2.53853 17.2956 2.31211 17.0759 2.1665C16.8247 2 16.4289 2 15.6372 2H8.36368C7.57197 2 7.17611 2 6.92494 2.1665C6.70529 2.31211 6.55199 2.53853 6.49838 2.79655C6.43707 3.09159 6.58408 3.45914 6.87812 4.19423L7.88599 6.71391C7.92875 6.8208 7.95013 6.87424 7.96517 6.92937C7.97853 6.97833 7.98814 7.02825 7.99392 7.07868C8.00043 7.13544 8.00043 7.19301 8.00043 7.30813Z"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
)
*/
export interface Props {
  id?: string
  name?: string
  className?: string
  resource?: StringMap
  iconClass?: string
  path: string
  toggle?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  expand?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  collapse?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  pin: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, index: number, m: Privilege) => void
  pins: Privilege[]
  items: Privilege[]
}
export function Nav(p: Props) {
  return React.createElement(
    "nav",
    { className: p.className },
    React.createElement(
      "ul",
      null,
      React.createElement(
        "li",
        null,
        React.createElement(
          "p",
          { className: "sidebar-off-menu" },
          React.createElement("button", { className: "toggle", onClick: p.toggle }),
          React.createElement("i", { className: "expand", onClick: p.expand }),
          React.createElement("i", { className: "collapse", onClick: p.collapse }),
        ),
      ),
      renderItems(p.path, p.pins, p.pin, p.resource, p.iconClass, true, true),
      renderItems(p.path, p.items, p.pin, p.resource, p.iconClass, true),
    ),
  )
  /*
  return (
    <nav className={p.className}>
      <ul>
        <li>
          <p className='sidebar-off-menu'>
            <button className='toggle' onClick={p.toggle} />
            <i className='expand' onClick={p.expand} />
            <i className='collapse' onClick={p.collapse} />
          </p>
        </li>
        {renderItems(p.path, p.pins, p.pin, p.resource, p.iconClass, true, true)}
        {renderItems(p.path, p.items, p.pin, p.resource, p.iconClass, true)}
      </ul>
    </nav>
  );
  */
}
export interface StringMap {
  [key: string]: string
}
export interface Privilege {
  id?: string
  name: string
  resource?: string
  path?: string
  icon?: string
  sequence?: number
  children?: Privilege[]
}
export type Pin = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, index: number, id: Privilege) => void
export const renderItems = (
  activePath: string,
  features: Privilege[],
  pin: Pin,
  resource?: StringMap,
  iconClass?: string,
  pinable?: boolean,
  isPinned?: boolean,
) => {
  return features.map((feature, index) => {
    return renderItem(activePath, index, feature, pin, resource, iconClass, pinable, isPinned)
  })
}
export const renderItem = (
  activePath: string,
  key: number,
  module: Privilege,
  pin: Pin,
  resource?: StringMap,
  iconClass?: string,
  pinable?: boolean,
  isPinned?: boolean,
): any => {
  let name = module.name
  if (resource && module.resource) {
    name = !resource[module.resource] || resource[module.resource] === "" ? module.name : resource[module.resource]
  }
  const className = getIconClass(module.icon)
  if (module.children && Array.isArray(module.children)) {
    const link = module.path
    const features = module.children
    /*
    return (
      <li key={key} className={'open ' + activeWithPath(activePath, link, true, features)}>
        <div className='menu-item' onClick={(e) => toggleMenuItem(e)}>
        {pinable && <button type='button' className={`btn-pin ${isPinned ? 'pinned' : ''}`} onClick={(event) => pin(event, key, module)}>
            <PinIcon />
          </button>}
          <i className={iconClass}>{className}</i>
          <span>{name}</span>
          <i className='entity-icon down' />
        </div>
        <ul className='sub-list expanded'>{renderItems(activePath, features, pin, resource, iconClass, false)}</ul>
      </li>
    );
*/
    return React.createElement(
      "li",
      { key: key, className: "open " + activeWithPath(activePath, link, true, features) },
      React.createElement(
        "div",
        {
          className: "menu-item",
          onClick: function (e: any) {
            return toggleMenuItem(e)
          },
        },
        pinable &&
          React.createElement(
            "button",
            {
              type: "button",
              className: "btn-pin " + (isPinned ? "pinned" : ""),
              onClick: function (event: any) {
                return pin(event, key, module)
              },
            },
            React.createElement(PinIcon, null),
          ),
        React.createElement("i", { className: iconClass }, className),
        React.createElement("span", null, name),
        React.createElement("i", { className: "entity-icon down" }),
      ),
      React.createElement("ul", { className: "sub-list expanded" }, renderItems(activePath, features, pin, resource, iconClass, false)),
    )
  } else {
    return React.createElement(
      "li",
      { key: key, className: activeWithPath(activePath, module.path, false) },
      React.createElement(
        Link,
        { to: module.path as any, className: "menu-item" },
        pinable &&
          React.createElement(
            "button",
            {
              type: "button",
              className: "btn-pin " + (isPinned ? "pinned" : ""),
              onClick: function (event: any) {
                return pin(event, key, module)
              },
            },
            React.createElement(PinIcon, null),
          ),
        React.createElement("i", { className: iconClass }, className),
        React.createElement("span", null, name),
      ),
    )
    /*
    return (
      <li key={key} className={activeWithPath(activePath, module.path, false)}>
        <Link to={module.path as any} className='menu-item'>
          {pinable && <button type='button' className={`btn-pin ${isPinned ? 'pinned' : ''}`} onClick={(event) => pin(event, key, module)}>
            <PinIcon />
          </button>}
          <i className={iconClass}>{className}</i>
          <span>{name}</span>
        </Link>
      </li>
    );
    */
  }
}
export function findParent(ele: HTMLElement, node: string): HTMLElement | null {
  let current: HTMLElement | null = ele
  while (true) {
    current = current.parentElement
    if (!current) {
      return null
    }
    if (current.nodeName === node) {
      return current
    }
  }
}
export function getIconClass(icon?: string): string {
  return !icon || icon === "" ? "settings" : icon
}
export const collapseAll = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
  e.preventDefault()
  const parent = findParent(e.currentTarget, "NAV")
  if (parent) {
    parent.classList.add("collapsed-all")
    parent.classList.remove("expanded-all")
    const navbar = Array.from(parent.querySelectorAll(".sidebar>nav>ul>li>ul.expanded"))
    if (navbar.length > 0) {
      const icons = Array.from(parent.querySelectorAll("i.down"))
      let i = 0
      for (i = 0; i < navbar.length; i++) {
        navbar[i].className = "sub-list"
      }
      for (i = 0; i < icons.length; i++) {
        icons[i].className = "entity-icon up"
      }
    }
  }
}
export const expandAll = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
  e.preventDefault()
  const parent = findParent(e.currentTarget, "NAV")
  if (parent) {
    parent.classList.remove("collapsed-all")
    parent.classList.add("expanded-all")
    const navbar = Array.from(parent.querySelectorAll(".sidebar>nav>ul>li>ul.sub-list"))
    if (navbar.length > 0) {
      const icons = Array.from(parent.querySelectorAll("i.up"))
      let i = 0
      for (i = 0; i < navbar.length; i++) {
        navbar[i].className = "sub-list expanded"
      }
      for (i = 0; i < icons.length; i++) {
        icons[i].className = "entity-icon down"
      }
    }
  }
}
export function isCollapsedAll(parent: HTMLElement): boolean {
  const navbar = Array.from(parent.querySelectorAll(".sidebar>nav>ul>li>ul.sub-list"))
  if (navbar.length > 0) {
    let i = 0
    for (i = 0; i < navbar.length; i++) {
      if (navbar[i].classList.contains("expanded")) {
        return false
      }
    }
    return true
  }
  return false
}
export function isExpandedAll(parent: HTMLElement): boolean {
  const navbar = Array.from(parent.querySelectorAll(".sidebar>nav>ul>li>ul.sub-list"))
  if (navbar.length > 0) {
    let i = 0
    for (i = 0; i < navbar.length; i++) {
      if (!navbar[i].classList.contains("expanded")) {
        return false
      }
    }
    return true
  }
  return false
}
export const activeWithPath = (activePath: string, path: string | undefined, isParent: boolean, features?: Privilege[]) => {
  if (isParent && features && Array.isArray(features)) {
    const hasChildLink = features.some((item) => item.path && item.path.length > 0 && activePath.startsWith(item.path))
    return path && activePath.startsWith(path) && hasChildLink ? "active" : ""
  }
  return path && activePath.startsWith(path) ? "active" : ""
}
export const toggleMenuItem = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
  event.preventDefault()
  let target: HTMLElement | null = event.currentTarget
  const currentTarget = event.currentTarget
  const nul = currentTarget.nextElementSibling
  if (nul) {
    const elI = currentTarget.querySelector(".menu-item > i.entity-icon")
    if (elI) {
      if (nul.classList.contains("expanded")) {
        nul.classList.remove("expanded")
        elI.classList.add("up")
        elI.classList.remove("down")
      } else {
        nul.classList.add("expanded")
        elI.classList.remove("up")
        elI.classList.add("down")
      }
    }
  }
  if (target && target.nodeName === "A") {
    target = target.parentElement
  }
  if (target && target.nodeName === "LI") {
    target.classList.toggle("open")
  }
  const parent = findParent(currentTarget, "NAV")
  if (parent) {
    setTimeout(() => {
      if (isExpandedAll(parent)) {
        parent.classList.remove("collapsed-all")
        parent.classList.add("expanded-all")
      } else if (isCollapsedAll(parent)) {
        parent.classList.remove("expanded-all")
        parent.classList.add("collapsed-all")
      } else {
        parent.classList.remove("expanded-all")
        parent.classList.remove("collapsed-all")
      }
    }, 0)
  }
}
export function sub(n1?: number, n2?: number): number {
  if (!n1 && !n2) {
    return 0
  } else if (n1 && n2) {
    return n1 - n2
  } else if (n1) {
    return n1
  } else if (n2) {
    return -n2
  }
  return 0
}
