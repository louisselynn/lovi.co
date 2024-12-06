"use client"

import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import { FiShoppingCart } from "react-icons/fi";

const UserCart = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    }

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative inline-block">
        <button onClick={toggleDropdown} className='text-[18px] mt-1'><FiShoppingCart /></button>
          {isOpen && (
            <ul className="absolute top-full right-[-5] mt-2 bg-white border border-gray-300 rounded-md shadow-lg">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <Link href="/shop/men">
                  Men
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <Link href="/shop/women">
                  Women
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <Link href="/shop/kids">
                  Kids
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <Link href="/shop/accessories">
                  Accessories
                </Link>
              </li>
            </ul>
          )}
    </div>
    
  )
}

export default UserCart;