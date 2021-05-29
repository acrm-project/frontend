import { Menu } from 'antd'
import { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router'

export type Link = { key: string; label: string; path: string }

const menuLinks: Link[] = [
  { key: '2', label: 'Главная', path: '/' },
  { key: '3', label: 'Клиенты', path: '/clients' },
]

export const useSelectedKeys = () => {
  const history = useHistory()
  const location = useLocation()
  const [selectedLink, setSelectedLink] = useState<Link>(
    menuLinks.find((_link) => location.pathname.startsWith(_link.path))!
  )

  useEffect(() => {
    setSelectedLink(
      (prevLink) =>
        menuLinks.find((_link) => location.pathname === _link.path) ?? prevLink
    )
  }, [location])

  const mappedLinks = () => {
    return menuLinks.map((link: Link) => (
      <Menu.Item key={link.key} onClick={() => history.push(link.path)}>
        {link.label}
      </Menu.Item>
    ))
  }

  return {
    selectedLink,
    mappedLinks,
    menuLinks,
  }
}
