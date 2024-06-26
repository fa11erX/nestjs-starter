import {
    FolderIcon,
    HomeIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'

const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: HomeIcon, current: true },
    { name: 'Todo', href: '/dashboard/todo', icon: FolderIcon, current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Sidebar() {
    return (
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 h-full">
            <div className="flex h-16 shrink-0 items-center">
                <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                />
            </div>
            <nav className="flex flex-1 flex-col">
                <ul role="list" className="flex flex-1 flex-col gap-y-7">
                    <li>
                        <ul role="list" className="-mx-2 space-y-1">
                            {navigation.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className={classNames(
                                            item.current ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800',
                                            'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                        )}
                                    >
                                        <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </li>

                    <li className="-mx-6 mt-auto">
                        <a
                            href="#"
                            className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-gray-800"
                        >
                            <img
                                className="h-8 w-8 rounded-full bg-gray-800"
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                            />
                            <span className="sr-only">Your profile</span>
                            <span aria-hidden="true">Tom Cook</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
