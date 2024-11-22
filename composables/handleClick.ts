// composables/useNavigation.ts
import { useRouter } from 'vue-router';

export const useNavigation = () => {
  const router = useRouter();

  const handleClick = (id: number) => {
    router.push(`/movies/${id}`);
  };

  return { handleClick };
};
