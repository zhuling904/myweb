import { useState } from "react";
import { ElementTree } from "./elementTree";
const imageDataPromise = fetch(ElementTree.img.url).then((resp) =>
  resp.arrayBuffer()
);
export const CanvasKit = () => {
  const [imageBytes, setImageBytes] = useState<ArrayBuffer | null>(null);
  imageDataPromise.then((imageData) => setImageBytes(imageData));
  return (
    <ck-canvas clear={{ red: 255, green: 165, blue: 0 }}>
      {imageBytes && (
        <ck-encoded-image
          top={ElementTree.img.x}
          left={ElementTree.img.y}
          bytes={imageBytes}
        />
      )}
      <ck-text
        x={ElementTree.title.x}
        y={ElementTree.title.y}
        paint={{ color: "#00FFFF", antiAlias: true }}
        font={{ size: 24 }}
      >
        {ElementTree.title.text}
      </ck-text>
    </ck-canvas>
  );
};
