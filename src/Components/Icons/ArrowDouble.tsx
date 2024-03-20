import React from 'react';

const ArrowDouble = (props: React.HTMLAttributes<any>) => {
    return (
        <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M22 8C21.4477 8 21 7.55228 21 7V4.41421L14.7071 10.7071C14.3166 11.0976 13.6834 11.0976 13.2929 10.7071C12.9024 10.3166 12.9024 9.68342 13.2929 9.29289L19.5858 3H17C16.4477 3 16 2.55228 16 2C16 1.44772 16.4477 1 17 1H21C22.1046 1 23 1.89543 23 3V7C23 7.55228 22.5523 8 22 8Z" fill="#0F0F0F" />
            <path d="M2 16C2.55228 16 3 16.4477 3 17V19.5858L9.29289 13.2929C9.68342 12.9024 10.3166 12.9024 10.7071 13.2929C11.0976 13.6834 11.0976 14.3166 10.7071 14.7071L4.41421 21H7C7.55228 21 8 21.4477 8 22C8 22.5523 7.55228 23 7 23H3C1.89543 23 1 22.1046 1 21V17C1 16.4477 1.44772 16 2 16Z" fill="#0F0F0F" />
        </svg>
    )
}

export default ArrowDouble;