from base.testing import KlaytnBaseTesting


class TestKlayAccounts(KlaytnBaseTesting):

    def test_post(self):
        klay_response = self.sdk.klay.accounts()
        self.assertEqual([], klay_response)
