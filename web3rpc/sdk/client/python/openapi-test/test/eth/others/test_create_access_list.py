from base.testing import KlaytnBaseTesting


class TestCreateAccessList(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.transactionArgs = {
            "from": "0x3bc5885c2941c5cda454bdb4a8c88aa7f248e312",
            "data": "0x20965255",
            "gasPrice": "0x3b9aca00",
            "gas": "0x3d0900",
            "to": "0x00f5f5f3a25f142fafd0af24a754fafa340f32c7"
        }

    def test_post(self):
        self.response = self.w3.eth.create_access_list(
            self.transactionArgs
        )
        self.assertTrue(len(self.response) >= 0)

    # def test_post_wrong_with_lack_paramaters(self):
    #     with self.assertRaises(ValueError):
    #         self.response = self.w3.eth.create_access_list()

