import { prisma } from '@/adapters/prisma'
import { AddUserRepository } from '@/domain/repositories/add-user.repository'

export class CreateUserRepository implements AddUserRepository {
  async add(data: AddUserRepository.Params): Promise<AddUserRepository.Result> {
    await prisma.user.create({ data })
  }
}
