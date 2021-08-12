import { strictEqual } from 'assert';
import { describe, it } from 'mocha'

describe('Mocha', () => {

    describe('reports a scenario that', () => {

        it('has no body as "pending"')

        it.skip('is skipped', () => {

        })

        it('has no errors as "passing"', () => {

        })

        it('has assertion errors as "failing"', () => {
            strictEqual(false, true, 'example assertion')
        })

        it('has any other errors as "failing" too', () => {
            throw new Error('Something went wrong')
        })
    })
})
