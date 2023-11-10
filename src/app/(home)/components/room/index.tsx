import classes from './index.module.css';
import Spline from '@/components/spline';
import { URL } from '@/lib/utils';

const Room = () => {
  return (
    <section className={classes.wrapper}>
      <Spline scene={URL.SPLINE.ROOM} />
    </section>
  );
};

export default Room;
