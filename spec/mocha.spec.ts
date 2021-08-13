import { strictEqual } from 'assert';
import { describe, it } from 'mocha'
import { actorCalled, Log } from '@serenity-js/core';

describe('Mocha', () => {

    describe('reports a scenario that', () => {

        it('has no body as "pending"')


        it('has no errors as "passing"', () => {

        })

        // remove '.skip' to see how failing tests are reported
        it.skip('has assertion errors as "failing"', () => {
            strictEqual(false, true, 'example assertion')
        })

        it.skip('has any other errors as "failing" too', () => {
            throw new Error('Something went wrong')
        })

        it('follows the Screenplay Pattern', () => {
            return actorCalled('Alice').attemptsTo(
                Log.the('Hello Serenity/JS'),
            )
        })
    })
})
