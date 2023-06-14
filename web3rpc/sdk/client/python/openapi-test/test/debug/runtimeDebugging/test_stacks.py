from base.testing import KlaytnBaseTesting


class TestDebugStacks(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.w3.debug.stacks()
        self.assertResponseSuccess()
