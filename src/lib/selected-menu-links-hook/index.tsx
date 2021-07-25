import { Menu } from 'antd'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { historyPush } from 'lib/routing/history'

export type Link = { key: string; label: string; path: string }

const menuLinks: Link[] = [
  { key: '2', label: 'Главная', path: '/' },
  { key: '3', label: 'Клиенты', path: '/clients' },
  { key: '4', label: 'В выполнении', path: '/in_progress' },
  { key: '5', label: 'Заказ-наряд', path: '/orders' },
]

export const useSelectedLinks = () => {
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
      <Menu.Item key={link.key} onClick={() => historyPush(link.path)}>
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
