from base.testing import KlaytnBaseTesting


class TestDebugStacks(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.sdk.debug.stacks()
        self.assertResponseSuccess()
