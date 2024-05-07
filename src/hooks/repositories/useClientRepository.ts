import { useRepositoryIoc } from "../../services/config/context";
import { TYPES } from "../../services/config/types";
import { ClientRepository } from "../../services/repositories/client/client.repository";


const useClientRepository = (): ClientRepository => {
  const { container } = useRepositoryIoc();

  return container.get(TYPES.CLIENT_REPOSITORY);
}

export default useClientRepository;