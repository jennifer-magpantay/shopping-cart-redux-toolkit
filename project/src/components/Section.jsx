/* eslint-disable react/prop-types */
export const Section = ({ id, title, subtitle, children }) => {
  return (
    <section data-id={id} className="section">
      <h2 className="section--title">{title}</h2>
      {subtitle && <p>{subtitle}</p>}
      {children}
    </section>
  );
};
