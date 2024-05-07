import { Container } from "inversify"
import "reflect-metadata"
import { ClientRepository } from "../repositories/client/client.repository";
import { TYPES } from "./types";
import { ClientRepositoryService } from "../repositories/client/client.repository.service";
import { ComboRepositoryService } from "../repositories/combo/combo.repository.service";
import { ComboRepository } from "../repositories/combo/combo.repository";

const repositoryContainer = new Container();

repositoryContainer.bind<ClientRepository>(TYPES.CLIENT_REPOSITORY).to(ClientRepositoryService);
repositoryContainer.bind<ComboRepository>(TYPES.COMBO_REPOSITORY).to(ComboRepositoryService);

export { repositoryContainer }