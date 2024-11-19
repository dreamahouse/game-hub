import noImage from "../assets/no-image-placeholder.webp";
const getCroppedImageUrl = (url: string) => {
  if (!url) return noImage;
  const target = "media/";
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};
export default getCroppedImageUrl;
//图片地址格式："https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg"
//拼接地址后将其裁切为600*400大小尺寸，减少图片内存："https://media.rawg.io/media/crop/600/400/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg"
