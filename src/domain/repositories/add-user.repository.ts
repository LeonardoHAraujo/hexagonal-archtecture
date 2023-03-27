import { User } from '@/domain/entities/user.entity'

export interface AddUserRepository {
  add(data: AddUserRepository.Params): Promise<AddUserRepository.Result>
}

export namespace AddUserRepository {
  export type Params = User
  export type Result = void
}
