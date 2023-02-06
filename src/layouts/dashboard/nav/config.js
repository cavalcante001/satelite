// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'Sorteios',
    path: '/dashboard/app',
    icon: icon('ic_piggy'),
  },
  {
    title: 'Ganhadores',
    path: '/dashboard/user',
    icon: icon('ic_winner'),
  },
  {
    title: 'Meus números',
    path: '/dashboard/products',
    icon: icon('ic_number'),
  },
  {
    title: 'Termos de uso',
    path: '/dashboard/blog',
    icon: icon('ic_termos'),
  },
];

export default navConfig;
