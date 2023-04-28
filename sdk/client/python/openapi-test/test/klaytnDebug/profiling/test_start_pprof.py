from base.testing import KlaytnBaseTesting


class TestStartPProf(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.address = "localhost"
        self.port = 6060

    def test_post(self):
        debug_response = self.sdk.debug.start_p_prof(
            self.address, self.port
        )

        self.covert_response(debug_response.response)
        self.assertResponseSuccess()
        self.assertIn("result", self.response)
