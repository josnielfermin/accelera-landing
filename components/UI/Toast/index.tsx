type ToastProps = {
  message: string;
  iconClass?: string;
};

const Toast = ({ message, iconClass = 'icon-bulb' }: ToastProps) => {
  return (
    <div className="w-[300px] px-5 pb-6 pt-7 rounded-[20px] [background:linear-gradient(39deg,_#0D110E_4.25%,_#374A39_112.49%)] animate-toast-in relative z-[1000000000000]">
      <div
        className={`${iconClass} text-woodsmoke-200 text-lg absolute top-1 right-3`}
      />
      <div className="text-woodsmoke-200 text-xs font-normal">{message}</div>
    </div>
  );
};

export default Toast;
