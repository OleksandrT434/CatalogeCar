import CarDetails from '@/components/CarDetails/CarDetails';
import { carDetailsApi } from '@/lib/clientApi';

type Props = {
  params: Promise<{ id: string }>;
};

export default async function CarDetailsPage({ params }: Props) {
  const { id } = await params;

  const car = await carDetailsApi(id);
  return <CarDetails car={car} />;
}
