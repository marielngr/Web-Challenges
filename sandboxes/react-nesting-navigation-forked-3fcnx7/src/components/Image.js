export default function Image({ src, alt, children }) {
  return (
    <img className="round-image" src={src} alt={alt}>
      {children}
    </img>
  );
}
