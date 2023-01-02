import usePageTitle from '../../../core/hooks/usePageTitle';
import UserCreateFeature from '../../features/UserCreateFeature';
import DefaultLayout from '../../layouts/Default/Default.layout';

export default function UserCreateView() {
  usePageTitle('Nova Pessoa');

  return (
    <DefaultLayout>
      <UserCreateFeature />
    </DefaultLayout>
  );
}
