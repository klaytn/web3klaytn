from base.testing import KlaytnBaseTesting


class TestAdminAddPeer(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.url = "kni://a979fb575495b8d6db44f750317d0f4622bf4c2aa3365d6af7c284339968eef29b69ad0dce72a4d8db5ebb4968de0e3bec910127f134779fbcb0cb6d3331163c@10.0.0.1:32323"

    def test_post(self):
        self.response = self.sdk.admin.add_peer(
            self.url
        )
        self.assertResponseSuccess()

    def test_post_wrong_with_lack_paramaters(self):
        self.response = self.sdk.admin.add_peer()
        self.assertErrorCodeMissingRequiredArgument()
