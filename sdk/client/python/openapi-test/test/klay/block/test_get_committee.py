from base.testing import KlaytnBaseTesting


class TestKlayGetCommittee(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.blockTag = "0x1b4"

    def test_post(self):
        klay_response = self.sdk.klay.get_committee(
            self.blockTag
        )

        self.covert_response(klay_response.response)
        self.assertResponseSuccess()
        self.assertIn("result", self.response)
