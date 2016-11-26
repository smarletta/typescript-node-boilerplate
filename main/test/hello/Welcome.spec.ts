import {suite, test} from 'mocha-typescript';
import { assert } from 'chai';
import World from '../../src/hello/World';

@suite
class HelloWorldTest {
    @test
    instanceCreation() {
        let helloWorld: World = new World('me');

        assert.isOk(helloWorld); 
    }

    @test
    sayHello() {
        let helloWorld: World = new World('me');

        let actual: string = helloWorld.sayHello();

        assert.equal(actual, 'Hello me');
    }
}