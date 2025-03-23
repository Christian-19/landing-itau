import Image from "next/image"

import Logo from "@/assets/logo.svg"

import Arrow from "@/assets/arrow-down.svg"

export function Header() {
    return (
        <header>
            <div>
                <div>
                    <div>
                        <Image
                        src={Logo}
                        alt="Logo"
                        />
                        <ul>
                            <li>
                                <button>
                                    <span>Para você</span>
                                    <Image
                                        src={Arrow}
                                        alt="Arrow dropdown"
                                    />
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}