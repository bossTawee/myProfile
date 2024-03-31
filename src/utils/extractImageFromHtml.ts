export const extractImageFromHtml = (content: string) => {
    const regex = /(https?:\/\/.*\.(?:png|jpg|jpeg))/i;
    const images = regex.exec(content);
    return images ? images[0] : "";
};