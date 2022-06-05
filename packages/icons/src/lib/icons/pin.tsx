

const pinIcon = (fill: string, size: number, style?: React.CSSProperties) => (
    <svg
        aria-hidden="true"
        data-testid="test-icon"
        fill="none"
        height={size}
        viewBox="0 0 24 24"
        width={size}
        xmlns="http://www.w3.org/2000/svg"
        style={style}
    >
        <title>pin icon</title>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 3.875C10.3903 3.875 8.83691 4.54728 7.68443 5.75962C6.53052 6.97347 5.875 8.62885 5.875 10.3636C5.875 12.8919 7.43803 15.3428 9.15019 17.244C9.99091 18.1775 10.8343 18.9417 11.4681 19.4727C11.6696 19.6414 11.8492 19.7861 12 19.9045C12.1508 19.7861 12.3304 19.6414 12.5319 19.4727C13.1657 18.9417 14.0091 18.1775 14.8498 17.244C16.562 15.3428 18.125 12.8919 18.125 10.3636C18.125 8.62885 17.4695 6.97347 16.3156 5.75962C15.1631 4.54728 13.6097 3.875 12 3.875ZM12 21C11.4976 21.7164 11.4971 21.7161 11.4971 21.7161L11.4948 21.7144L11.4894 21.7106L11.4712 21.6977C11.4559 21.6867 11.434 21.671 11.4061 21.6507C11.3504 21.6101 11.2705 21.551 11.1699 21.4746C10.9687 21.3218 10.6843 21.099 10.3444 20.8142C9.66574 20.2458 8.75909 19.4248 7.84981 18.4151C6.06197 16.4299 4.125 13.5626 4.125 10.3636C4.125 8.19251 4.94447 6.10195 6.41607 4.5539C7.88911 3.00434 9.89671 2.125 12 2.125C14.1033 2.125 16.1109 3.00434 17.5839 4.5539C19.0555 6.10195 19.875 8.19251 19.875 10.3636C19.875 13.5626 17.938 16.4299 16.1502 18.4151C15.2409 19.4248 14.3343 20.2458 13.6556 20.8142C13.3157 21.099 13.0313 21.3218 12.8301 21.4746C12.7295 21.551 12.6496 21.6101 12.5939 21.6507C12.566 21.671 12.5441 21.6867 12.5288 21.6977L12.5106 21.7106L12.5052 21.7144L12.5035 21.7156C12.5035 21.7156 12.5024 21.7164 12 21ZM12 21L12.5024 21.7164C12.2008 21.9279 11.7987 21.9275 11.4971 21.7161L12 21Z"
            fill={fill}
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 8.875C11.1025 8.875 10.375 9.60254 10.375 10.5C10.375 11.3975 11.1025 12.125 12 12.125C12.8975 12.125 13.625 11.3975 13.625 10.5C13.625 9.60254 12.8975 8.875 12 8.875ZM8.625 10.5C8.625 8.63604 10.136 7.125 12 7.125C13.864 7.125 15.375 8.63604 15.375 10.5C15.375 12.364 13.864 13.875 12 13.875C10.136 13.875 8.625 12.364 8.625 10.5Z"
            fill={fill}
        />
    </svg>
);
export default pinIcon;