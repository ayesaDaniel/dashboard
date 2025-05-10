export const Avatar = ({ src, alt = "Avatar", size = "10" }) => (
    <img
      src={src}
      alt={alt}
      className={`rounded-full w-${size} h-${size} object-cover`}
    />
  );
  