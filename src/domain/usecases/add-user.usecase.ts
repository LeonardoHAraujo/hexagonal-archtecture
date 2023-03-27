import { AddUserRepository } from '@/domain/repositories/add-user.repository'

export class AddUserUseCase {
  constructor(
    private readonly addUser: AddUserRepository
  ) {}

  async execute(data: AddUser.Params): Promise<AddUser.Result> {
    await this.addUser.add(data)
  }
}

export namespace AddUser {
  export type Params = AddUserRepository.Params
  export type Result = AddUserRepository.Result
}
