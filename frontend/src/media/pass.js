import React from "react";
import { SvgXml } from "react-native-svg";

const svg = `
<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="50" cy="50" r="49" fill="white" stroke="#04AA8C" stroke-width="2"/>
<path d="M26.2146 77H28.2606V70.598H30.9226C34.4646 70.598 36.8626 69.014 36.8626 65.604C36.8626 62.084 34.4426 60.852 30.8346 60.852H26.2146V77ZM28.2606 68.948V62.524H30.5706C33.4086 62.524 34.8386 63.272 34.8386 65.604C34.8386 67.914 33.4966 68.948 30.6586 68.948H28.2606ZM41.6844 67.98C42.2564 66.154 42.7844 64.416 43.2904 62.524H43.3784C43.9064 64.394 44.4124 66.154 45.0064 67.98L45.7764 70.444H40.8924L41.6844 67.98ZM36.7564 77H38.8244L40.3864 72.072H46.2824L47.8224 77H49.9784L44.5004 60.852H42.2344L36.7564 77ZM56.7417 77.286C60.1077 77.286 62.2197 75.262 62.2197 72.71C62.2197 70.312 60.7677 69.212 58.8977 68.398L56.5877 67.408C55.3337 66.88 53.9257 66.286 53.9257 64.724C53.9257 63.272 55.1137 62.348 56.9397 62.348C58.4357 62.348 59.6237 62.942 60.6137 63.866L61.6917 62.568C60.5477 61.38 58.8537 60.566 56.9397 60.566C54.0137 60.566 51.8577 62.37 51.8577 64.856C51.8577 67.21 53.6397 68.354 55.1357 68.992L57.4677 70.004C58.9857 70.686 60.1517 71.214 60.1517 72.864C60.1517 74.448 58.8757 75.504 56.7637 75.504C55.0917 75.504 53.4637 74.712 52.3197 73.502L51.0877 74.888C52.4957 76.362 54.4537 77.286 56.7417 77.286ZM69.5464 77.286C72.9124 77.286 75.0244 75.262 75.0244 72.71C75.0244 70.312 73.5724 69.212 71.7024 68.398L69.3924 67.408C68.1384 66.88 66.7304 66.286 66.7304 64.724C66.7304 63.272 67.9184 62.348 69.7444 62.348C71.2404 62.348 72.4284 62.942 73.4184 63.866L74.4964 62.568C73.3524 61.38 71.6584 60.566 69.7444 60.566C66.8184 60.566 64.6624 62.37 64.6624 64.856C64.6624 67.21 66.4444 68.354 67.9404 68.992L70.2724 70.004C71.7904 70.686 72.9564 71.214 72.9564 72.864C72.9564 74.448 71.6804 75.504 69.5684 75.504C67.8964 75.504 66.2684 74.712 65.1244 73.502L63.8924 74.888C65.3004 76.362 67.2584 77.286 69.5464 77.286Z" fill="#04AA8C"/>
<path d="M53.2152 29.3831C53.3478 29.3831 53.4804 29.3831 53.613 29.3831C57.4725 29.3831 61.3319 29.3794 65.1914 29.3849C66.9678 29.3877 68.4162 30.5258 68.8588 32.2458C69.521 34.8176 67.7773 37.2416 65.2344 37.2591C62.9034 37.2748 60.5733 37.2693 58.2423 37.2545C57.9142 37.2527 57.7747 37.3302 57.6895 37.7007C56.818 41.5075 55.9328 45.3107 55.033 49.1102C54.4517 51.5637 52.7158 52.9918 50.3546 52.9946C47.7231 52.9974 45.0916 53.0066 42.4601 52.9918C39.3058 52.9743 36.7225 50.6778 36.1172 47.3605C36.0362 46.9153 36.0078 46.4534 36.007 45.9989C35.9984 42.2752 35.9984 38.5515 36.0035 34.8278C36.0061 32.8971 36.8087 31.4726 38.3104 30.4011C40.4055 28.9055 42.4471 27.3231 44.5103 25.7767C46.3273 24.415 48.1433 23.0497 49.9594 21.6871C51.4542 20.5657 52.9784 20.828 54.0685 22.3929C55.4119 24.3208 55.2551 27.0145 53.6931 28.7475C53.5278 28.9304 53.3409 29.0902 53.1635 29.2611C53.1825 29.3018 53.1988 29.3424 53.2152 29.3831ZM58.2001 31.3618C55.8321 31.3618 53.4641 31.3599 51.096 31.3636C50.6371 31.3645 50.2444 31.2454 50.0541 30.7484C49.8647 30.2551 50.0498 29.8736 50.383 29.5244C51.0461 28.8297 51.7065 28.1314 52.3489 27.4136C53.3986 26.2413 53.4201 24.4806 52.4161 23.3324C52.088 22.9573 51.7651 22.8806 51.3346 23.0968C51.177 23.1763 51.0306 23.2843 50.8876 23.3915C49.286 24.5905 47.6861 25.7933 46.0844 26.9933C43.8361 28.6773 41.6041 30.3881 39.3308 32.0315C38.3483 32.7419 37.8308 33.6426 37.8325 34.9063C37.8368 38.5893 37.8316 42.2715 37.8377 45.9546C37.8385 46.3158 37.8601 46.6834 37.9272 47.0363C38.3819 49.4242 40.2031 51.0048 42.5221 51.015C45.1028 51.027 47.6835 51.0187 50.2651 51.0177C51.9451 51.0168 52.8974 50.2076 53.3013 48.4663C54.252 44.3647 55.2095 40.2651 56.1645 36.1645C56.3031 35.5695 56.6079 35.3044 57.178 35.2859C57.4535 35.2776 57.7291 35.2841 58.0046 35.2841C60.4105 35.2841 62.8156 35.2878 65.2215 35.2823C66.2092 35.2795 66.9497 34.6726 67.1263 33.7488C67.3691 32.4712 66.5261 31.3729 65.2672 31.3664C62.9103 31.3535 60.5552 31.3618 58.2001 31.3618Z" fill="#04AA8C"/>
<path d="M37 49C37 49.5523 36.5523 50 36 50L32 50C31.4477 50 31 49.5523 31 49L31 34C31 33.4477 31.4477 33 32 33L36 33C36.5523 33 37 33.4477 37 34L37 49Z" stroke="#04AA8C" stroke-width="2"/>
</svg>
`;

const Pass = () => {
    const Pass = () => <SvgXml xml={svg} width="50" height="50" />;
    return <Pass />;
};

export default Pass;