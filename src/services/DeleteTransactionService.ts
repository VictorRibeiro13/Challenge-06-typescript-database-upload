import { getCustomRepository } from 'typeorm';

import AppError from '../errors/AppError';
import TransactionRepository from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id_transaction: string): Promise<void> {
    const transactionRepository = getCustomRepository(TransactionRepository);

    const transactionExists = transactionRepository.findOne(id_transaction);

    if (!transactionExists) {
      throw new AppError('Transaction does not exists');
    }

    await transactionRepository.delete(id_transaction);
  }
}

export default DeleteTransactionService;
