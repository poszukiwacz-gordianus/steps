export default function Step({ step, children }) {
  return <div className={step >= children ? "active" : null}>{children}</div>;
}
