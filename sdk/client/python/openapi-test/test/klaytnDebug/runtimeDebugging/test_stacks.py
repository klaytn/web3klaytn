from base.testing import KlaytnBaseTesting


class TestDebugStacks(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.sdk.debug.stacks()

        self.covert_response(self.response.response)
        self.assertResponseSuccess()
        self.assertIn("result", self.response)
