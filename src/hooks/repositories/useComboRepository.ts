import { useRepositoryIoc } from "../../services/config/context";
import { TYPES } from "../../services/config/types";
import { ComboRepository } from "../../services/repositories/combo/combo.repository";

const useComboRepository = (): ComboRepository => {
  const { container } = useRepositoryIoc();

  return container.get(TYPES.COMBO_REPOSITORY);
}

export default useComboRepository;