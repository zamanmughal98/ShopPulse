import { CirclesWithBar } from 'react-loader-spinner';

const Loader = ({ size = 200 }) => {
  const color = 'rgb(189 184 210)';
  return (
    <CirclesWithBar
      height={size}
      width={size}
      color={color}
      outerCircleColor={color}
      innerCircleColor={color}
      barColor={color}
      ariaLabel="Loader Animation"
      wrapperStyle={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
      wrapperClass=""
    />
  );
};
export default Loader;
