import React from 'react'
import { IconType } from '../../../core/type/icon.type'

export const HeartIcon: React.FC<IconType> = ({ size = 32, className="", color}) => {
  return (
    <svg className={className} width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <path className="hover:fill-transparent transition duration-300 ease-in-out" d="M23.755 9.377C22.7863 8.40837 21.504 7.87895 20.1353 7.87895C18.7667 7.87895 17.4804 8.41229 16.5118 9.38092L16.0059 9.8868L15.4922 9.37307C14.5236 8.40444 13.2334 7.86719 11.8647 7.86719C10.5 7.86719 9.21375 8.40052 8.24904 9.36523C7.28041 10.3339 6.74708 11.6201 6.751 12.9888C6.751 14.3574 7.28825 15.6398 8.25688 16.6084L15.6216 23.9731C15.7236 24.0751 15.8608 24.13 15.9942 24.13C16.1275 24.13 16.2647 24.079 16.3667 23.977L23.7471 16.6241C24.7157 15.6554 25.2491 14.3692 25.2491 13.0005C25.253 11.6319 24.7236 10.3456 23.755 9.377ZM23.002 15.8751L15.9942 22.8555L9.00198 15.8633C8.23335 15.0947 7.80982 14.075 7.80982 12.9888C7.80982 11.9025 8.22943 10.8829 8.99806 10.1182C9.76277 9.35347 10.7824 8.92994 11.8647 8.92994C12.951 8.92994 13.9745 9.35347 14.7432 10.1221L15.6294 11.0084C15.8373 11.2162 16.1706 11.2162 16.3785 11.0084L17.2569 10.1299C18.0255 9.36131 19.0491 8.93778 20.1314 8.93778C21.2138 8.93778 22.2334 9.36131 23.002 10.126C23.7706 10.8946 24.1903 11.9143 24.1903 13.0005C24.1942 14.0868 23.7706 15.1064 23.002 15.8751Z" fill={color}/>
      <path className="fill-transparent hover:fill-primary transition duration-300 ease-in-out" d="M23.755 9.377C22.7863 8.40837 21.504 7.87895 20.1353 7.87895C18.7667 7.87895 17.4804 8.41229 16.5118 9.38092L16.0059 9.8868L15.4922 9.37307C14.5236 8.40444 13.2334 7.86719 11.8647 7.86719C10.5 7.86719 9.21375 8.40052 8.24904 9.36523C7.28041 10.3339 6.74708 11.6201 6.751 12.9888C6.751 14.3574 7.28825 15.6398 8.25688 16.6084L15.6216 23.9731C15.7236 24.0751 15.8608 24.13 15.9942 24.13C16.1275 24.13 16.2647 24.079 16.3667 23.977L23.7471 16.6241C24.7157 15.6554 25.2491 14.3692 25.2491 13.0005C25.253 11.6319 24.7236 10.3456 23.755 9.377Z" fill="#0B0B0B"/>
    </svg>
  )
}