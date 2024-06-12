import React from 'react';
import { IconType } from '../../../core/type/icon.type';

export const AddressIcon: React.FC<IconType> = ({
  size = 24,
  color = '#333333', // Default color to match the SVG provided
  className,
  onClick,
}) => {
  return (
    <svg
      width={size}
      height={size}
      className={className}
      onClick={onClick}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 4H20V20H4V4Z"
        fill="white"
        fillOpacity="0.01"
      />
      <path
        d="M16.7134 15.0857C17.9198 15.4476 18.666 15.9476 18.666 16.4999C18.666 17.6045 15.6812 18.4999 11.9993 18.4999C8.31745 18.4999 5.33268 17.6045 5.33268 16.4999C5.33268 15.9476 6.07888 15.4476 7.28532 15.0857"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.0007 15.8333C12.0007 15.8333 7.66732 13.0013 7.66732 9.72727C7.66732 7.39261 9.60742 5.5 12.0007 5.5C14.3939 5.5 16.334 7.39261 16.334 9.72727C16.334 13.0013 12.0007 15.8333 12.0007 15.8333Z"
        stroke={color}
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path
        d="M11.9993 11.5001C11.0789 11.5001 10.3327 10.7539 10.3327 9.83341C10.3327 8.91295 11.0789 8.16675 11.9993 8.16675C12.9198 8.16675 13.666 8.91295 13.666 9.83341C13.666 10.7539 12.9198 11.5001 11.9993 11.5001Z"
        stroke={color}
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
};
