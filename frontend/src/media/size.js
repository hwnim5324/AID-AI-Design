import React from "react";
import { SvgXml } from "react-native-svg";

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="128" height="128" viewBox="0 0 128 128">
  <image id="사각형_1" data-name="사각형 1" width="128" height="128" xlink:href="data:image/png;base64,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"/>
</svg>
`;

const Size = () => {
    const Size = () => <SvgXml xml={svg} width="80" height="80" />;
    return <Size />;
};

export default Size;