function userCard(key) {
    let balance = 100;
    let transactionLimit = 100;
    let historyLog = [];
    let taxes = 0.005;
    let operationTime = new Date().toLocaleString('en-GB');
    return {
        getCardOptions() {
            return {
                balance,
                transactionLimit,
                historyLog,
                key
            };
        },
        putCredits(amount) {
            balance += amount;
            historyLog.push({
                operationType: 'Recived credits',
                credits: amount,
                operationTime
            });
        },
        takeCredits(amount) {
            if (amount > balance && amount > transactionLimit) {
                console.log('You can\'t take credits from the card ');
            } else {
                balance -= amount;
                historyLog.push({
                    operationType: 'Withdrawal of credits',
                    credits: amount,
                    operationTime
                });
            }
        },
        setTransactionLimit(amount) {
            transactionLimit = amount;
            historyLog.push({
                operationType: 'Transaction limit change',
                credits: amount,
                operationTime: operationTime
            });
        },
        transferCredits(amount, card) {
            let amountTax = amount * taxes + amount;
            if (amountTax > balance || amountTax > transactionLimit) {
                console.log('You can\'t make a transfer');
            } else {
                this.takeCredits(amountTax);
                card.putCredits(amount);
            }
        }
    };
}
class UserAccount {
    constructor(name) {
        this.name = name;
        this.cards = [];
        this.cardLimit = 3;
    }
    addCard() {
        if (this.cards.length < this.cardLimit) {
            this.cards.push(userCard(this.cards.length + 1));
        }
    }
    getCardByKey(key) {
        return this.cards[key - 1];
    }
}
