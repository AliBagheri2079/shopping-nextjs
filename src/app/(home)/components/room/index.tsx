import Styles from './index.module.css';
import Spline from '@/components/spline';
import { URL } from '@/lib/utils';

const Room = () => {
  return (
    <section className={Styles.Wrapper}>
      <Spline scene={URL.SPLINE.ROOM} className={Styles.Object} />
    </section>
  );
};

export default Room;
