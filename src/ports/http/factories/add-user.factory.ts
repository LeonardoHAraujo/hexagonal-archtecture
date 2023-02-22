import { AddUserUseCase } from '@/domain/usecases/add-user.usecase'
import { CreateUserRepository } from '@/ports/db/repositories/add-user.repository'

export class AddUserFactory {
  static build() {
    const createUserRepository = new CreateUserRepository()
    return new AddUserUseCase(createUserRepository)
  }
}
